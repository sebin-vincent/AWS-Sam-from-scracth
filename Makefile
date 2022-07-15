.PHONY: build-RuntimeDependenciesLayer build-lambda-common
.PHONY: build-getAllItemsFunction

build-getAllItemsFunction:
	$(MAKE) HANDLER=src/handlers/get-all-items.ts build-lambda-common

build-lambda-common:
	yarn
	rm -rf dist
	echo "{\"extends\": \"./tsconfig.json\", \"include\": [\"${HANDLER}\"] }" > tsconfig-only-handler.json
	yarn run build -- --build tsconfig-only-handler.json
	cp -r dist "$(ARTIFACTS_DIR)/"

build-RuntimeDependenciesLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json yarn.lock "$(ARTIFACTS_DIR)/nodejs"
	yarn install --production --cwd "$(ARTIFACTS_DIR)/nodejs/"
	rm "$(ARTIFACTS_DIR)/nodejs/package.json" # to avoid rebuilding when changes doesn't relate to dependencies