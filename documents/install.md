# Installation Guide for Memo Test Game

This guide provides step-by-step instructions for setting up the Memo Test Game on your local machine.

## Prerequisites

- Docker installed on your machine.
- Git installed on your machine.

## Steps

1. **Clone the Repository**: `git clone https://github.com/patocardo/memo-game.git`
2. **Navigate to the Project Directory**: `cd memo-game`
3. **Build Docker Containers**: `docker-compose build`
5. **Install Backend Dependencies**: `docker-compose exec backend composer install`
6. **Install Frontend Dependencies**: `docker-compose exec frontend npm install`
7. **Run Database Migrations**: `docker-compose exec backend php artisan migrate`

8. **Access the Application**:
Open your browser and navigate to `http://localhost:3000` to access the Memo Test Game.

## Troubleshooting

If you encounter any issues during the installation process, please check the following:

- Ensure Docker is running and has the necessary permissions.
- Check the Docker logs for any errors: `docker-compose logs`.

### Common errors

Most of the errors are related to permissions for
* logging
* saving modified files
* creating files from CLI
* Even connection between frontend and backend have certain "connection errors" but they are docker-related

The following are commands used from host machine to solve most of them
```
docker exec -it --user root memo-game-memotest-1 chown -R www-data:www-data /var/www/storage
docker exec -it --user root memo-game-memotest-1 chmod -R 775 /var/www/storage

docker exec -it --user root memo-game-memotest-1 chown -R www-data:www-data /var/www/bootstrap/cache
docker exec -it --user root memo-game-memotest-1 chmod -R 775 /var/www/bootstrap/cache

docker exec -it --user root memo-game-memotest-1 chmod 775 /var/www/storage/logs/laravel.log
docker exec -it --user root memo-game-memotest-1 chown www-data:www-data /var/www/storage/logs/laravel.log


docker exec -it --user root memo-game-memotest-1 chmod 664 database/sqlite/database.sqlite
docker exec -it --user root memo-game-memotest-1 chown www-data:www-data database/sqlite/database.sqlite
```

One thing to check, is the owner of files and/or folders where the permission error was triggered.
```
ls -l path/to/the/problem
docker exec -it memo-game-memotest-1 ls -l path/to/the/problem
```

If you're still facing issues, please raise an issue on the GitHub repository.







