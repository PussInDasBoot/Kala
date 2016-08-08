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

Remember to always run this server on 3001

bin/rails s -b 0.0.0.0 -p 3001