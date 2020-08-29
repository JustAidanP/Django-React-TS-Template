all:
	source env/bin/activate
	
	npm run build

	./manage.py collectstatic
