sudo gem install bundler

brew install postgresql

vi ~/.bash_profile
 - add into file: 'alias pg="postgres -D /usr/local/var/postgres"'
 - save and quit vim

restart computer

head to the server directory

pg - this starts the database

bundle install

bin/rails db:create etc

pg_dump -a -T ar_internal_metadata -T schema_migrations kala_development > name_of_file.sql

Remember to always run this server on 3001

bin/rails s -b 0.0.0.0 -p 3001

Seeding Database In Vagrant:
  1) bin/rails db:drop
  2) bin/rails db:create
  3) bin/rails db:migrate
  4) psql kala_development < name_of_file.sql

To run the app on rails server:
1) Open a tab, cd into client/, and execute npm start
2) Open a tab, cd into server/, and start the Rails server
3 Go to localhost:3001 in your browser
4) Upon clicking login, you will be redirected to our app's main page with all of the React stuff on it
5) Note the page with all of the React stuff on it is localhost:3001/kala
