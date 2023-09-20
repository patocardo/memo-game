FROM php:8.1-fpm

# Allow Composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

# Install system dependencies, PHP extensions, and utilities
RUN apt-get update && apt-get install -y libpng-dev libonig-dev libxml2-dev sqlite3 libsqlite3-dev zip unzip && \
    docker-php-ext-install pdo pdo_sqlite mbstring exif pcntl xml gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www

# Copy existing application directory contents
COPY . /var/www

# Install Laravel and LighthousePHP dependencies
RUN composer install --no-scripts --no-autoloader

# Set permissions for storage and bootstrap/cache directories
RUN chown -R www-data:www-data /var/www/storage && \
    chmod -R 775 /var/www/storage && \
    chown -R www-data:www-data /var/www/bootstrap/cache && \
    chmod -R 775 /var/www/bootstrap/cache

CMD ["php-fpm"]
