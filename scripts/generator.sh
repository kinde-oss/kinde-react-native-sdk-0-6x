#!/usr/bin/env bash

set -e

SCRIPT="$0"
echo "# START SCRIPT: $SCRIPT"

declare cwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
declare root="$(cd "$cwd" && cd ../ && pwd)"
EXECUTABLE="${root}/modules/openapi-generator-cli/target/openapi-generator-cli.jar"

while :; do
    printf "\n Enter your generator name: "
    read GENERATOR_NAME
    [ ! -f $GENERATOR_NAME ] && break
    printf "Generator must have name"
done
echo "Package: (com.kinde.codegen)"
read PACKAGE
if [ -z $PACKAGE ]; then
    PACKAGE="com.kinde.codegen"
fi
echo "Output: ($GENERATOR_NAME)"
read OUT_GENERATOR

if [ -z $OUT_GENERATOR ]; then
    OUT_GENERATOR="$GENERATOR_NAME"
fi

while true; do
    echo "Generator name: $GENERATOR_NAME"
    echo "Package: $PACKAGE"
    echo "Output: $OUT_GENERATOR"
    read -p "Do you want to generate this project? " yn
    case $yn in
        [Yy]* )
if [ ! -f "$EXECUTABLE" ]; then
echo "Rebuilding…"
(cd "$root" && ./mvnw -B clean PACKAGE)
fi

yaml="$GENERATOR_NAME.yaml"
file="$root/bin/configs/$yaml"
cat > $file <<EOF
inputSpec: kinde-mgmt-api-specs.yaml
EOF
echo "Created $yaml in $root/bin/configs";

export JAVA_OPTS="${JAVA_OPTS} -Xmx1024M -DloggerPath=conf/log4j.properties"
ags="meta -n $GENERATOR_NAME -t DOCUMENTATION -p $PACKAGE -o $root/generators/$OUT_GENERATOR $@"

java $JAVA_OPTS -jar $EXECUTABLE $ags

echo "This project can be found at $root/generators/$OUT_GENERATOR"
echo -e "Please reading the README.md in the folder and make some changes! 🚀🚀🚀"
        break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done