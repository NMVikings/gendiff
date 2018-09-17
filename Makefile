install:
	npm install

start:
	npx babel-node -- src/bin/genDiff.js

lint:
	npx eslint .

test:
	npx jest

watch:
	npx jest --watch

publish:
	npm publish