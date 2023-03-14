FROM php:8.0-apache

# Install dependencies
RUN apt-get update && \
    apt-get install -y \
        git \
        unzip \
        libicu-dev \
        libzip-dev && \
    docker-php-ext-install intl pdo_mysql zip && \
    a2enmod rewrite && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set up the Apache document root
ENV APACHE_DOCUMENT_ROOT /var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Copy the application code
COPY . /var/www/html

# Install dependencies
WORKDIR /var/www/html
RUN composer install

EXPOSE 80
