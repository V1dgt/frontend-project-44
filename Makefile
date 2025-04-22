install: # установить зависимости
       	npm ci

start: # быстрый запуск игры
	node bin/brain-games.js

publish: # публикация
	npm publish --dry-run
