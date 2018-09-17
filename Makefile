install:
	npm install

start:
	npx babel-node -- src/bin/gendiff.js -v

lint:
	npx eslint .

publish:
	npm publish