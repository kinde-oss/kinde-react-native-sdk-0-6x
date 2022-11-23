clean:
	rm -rf ./out
build-php:
	./scripts/kinde-generate-package.sh -l php
build-react-native:
	./scripts/kinde-generate-package.sh -l react-native