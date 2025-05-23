<?php

declare(strict_types=1);

namespace Deployer;

require 'recipe/laravel.php';

// Config
set('repository', 'https://github.com/msamgan/p2s.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts
host('167.172.238.25')
    ->set('remote_user', 'parceltoship')
    ->set('deploy_path', '~/htdocs/parceltoship.com');

desc('Build the assets');
task('build', function () {
    cd('{{release_path}}');
    run('npm install');
    run('npm run build');
});

task('optimize', function () {
    cd('{{release_path}}');
    run('php artisan optimize');
});

task('clear_cache', function () {
    cd('{{current_path}}');
    run('php artisan cache:clear');
});

after('deploy:vendors', 'build');
after('deploy:symlink', 'optimize');

// Hooks
after('deploy:failed', 'deploy:unlock');
