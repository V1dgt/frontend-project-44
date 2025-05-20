install:
	npm ci

start:
	node bin/brain-games.js

publish:
	npm publish --dry-run

.PHONY: lint

lint:
	npx eslint .
