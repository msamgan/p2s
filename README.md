# Parcel to Ship

## Making the site live

1. Push the code to the server
2. SSH into the server
3. Navigate to the project directory
4. Run the following command to install the dependencies:
   ```bash
   composer install
   npm install
   npm run build
   ```
   
5. Copy the `.env.example` file to `.env` and update the environment variables as needed.
6. Update the `.env` file with the production database credentials and other environment variables.
7. Run the following command to generate the application key:
   ```bash
   php artisan key:generate
   ```
8. Run the following command to migrate the database:
   ```bash
    php artisan migrate
    ```
