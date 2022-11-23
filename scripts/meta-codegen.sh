#!/usr/bin/env bash

set -e

SCRIPT="$0"
echo "# START SCRIPT: $SCRIPT"

declare cwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
declare root="$(cd "$cwd" && cd ../ && pwd)"
EXECUTABLE="${root}/modules/openapi-generator-cli/target/openapi-generator-cli.jar"

GENERATOR_NAME="react-native"
OUT_GENERATOR="react-native"
CONFIG="${root}/bin/configs/kinde-react-native.yaml"

while getopts c:g:o: flag
do
    case "${flag}" in
        c) CONFIG=${OPTARG};;
        g) GENERATOR_NAME=${OPTARG};;
    esac
done

OUT_GENERATOR="${GENERATOR_NAME/kinde-/''}"
TEMAPLTE="$root/generators/$OUT_GENERATOR/src/main/resources/$OUT_GENERATOR"

if [ ! -f "$EXECUTABLE" ]; then
  echo "Rebuilding…"
  (cd "$root" && ./mvnw -B clean package)
fi

export JAVA_OPTS="${JAVA_OPTS} -Xmx1024M -DloggerPath=conf/log4j.properties"

(cd "$root" && ./mvnw -B package -Djacoco.skip=true -DskipTests=true -f "$root"/generators/${OUT_GENERATOR}/pom.xml)

ags2="generate -t $TEMAPLTE $@"

java $JAVA_OPTS -cp ${root}/generators/${OUT_GENERATOR}/target/${GENERATOR_NAME}-openapi-generator-1.0.0.jar:$EXECUTABLE org.openapitools.codegen.OpenAPIGenerator $ags2
