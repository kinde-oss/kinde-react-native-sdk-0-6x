#!/usr/bin/env bash

set -e

SCRIPT="$0"
echo "# START SCRIPT: $SCRIPT"

declare cwd="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
declare root="$(cd "$cwd" && cd ../ && pwd)"

LANGUAGE="react-native"
SUPPORTS=("react-native")
while getopts c:l: flag
do
    case "${flag}" in
        c) CONFIG=${OPTARG};;
        l) LANGUAGE=${OPTARG};;
    esac
done

if [[ ! " ${SUPPORTS[*]} " =~ " ${LANGUAGE} " ]]; then
    echo "$LANGUAGE does not support. Support LANGUAGEs:"
    for i in "${SUPPORTS[@]}"; do echo "$i"; done
    exit;
fi

if [ ! "$CONFIG" ]; then
    CONFIG="${root}/bin/configs/kinde-${LANGUAGE}.yaml"
fi

ROOT_OUTPUT="$root/out"
OUTPUT="$root/out/kinde-$LANGUAGE-sdk"

if [ ! -d "$ROOT_OUTPUT" ]; then
  echo "Creating root output folder…"
  mkdir "$ROOT_OUTPUT"
fi

echo "Cleaning output folder..."
(rm -rf $OUTPUT && mkdir "$OUTPUT")

echo "Building package... $CONFIG"
(cd "$root" && ./scripts/meta-codegen.sh -g "kinde-$LANGUAGE" -o $OUTPUT -c $CONFIG)
echo "Package generated at : $OUTPUT"