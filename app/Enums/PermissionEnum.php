<?php

declare(strict_types=1);

namespace App\Enums;

enum PermissionEnum: string
{
    case RateList = 'rate.list';
    case RateCreate = 'rate.create';
    case RateView = 'rate.view';
    case RateUpdate = 'rate.update';
    case RateDelete = 'rate.delete';

    case BusinessList = 'business.list';
    case BusinessCreate = 'business.create';
    case BusinessView = 'business.view';
    case BusinessUpdate = 'business.update';
    case BusinessDelete = 'business.delete';

    case RoleList = 'role.list';
    case RoleCreate = 'role.create';
    case RoleView = 'role.view';
    case RoleUpdate = 'role.update';
    case RoleDelete = 'role.delete';

    case UserList = 'user.list';
    case UserCreate = 'user.create';
    case UserView = 'user.view';
    case UserUpdate = 'user.update';
    case UserDelete = 'user.delete';

    public function can(): string
    {
        return match ($this) {
            self::BusinessList => 'can:business.list',
            self::BusinessCreate => 'can:business.create',
            self::BusinessView => 'can:business.view',
            self::BusinessUpdate => 'can:business.update',
            self::BusinessDelete => 'can:business.delete',

            self::RoleList => 'can:role.list',
            self::RoleCreate => 'can:role.create',
            self::RoleView => 'can:role.view',
            self::RoleUpdate => 'can:role.update',
            self::RoleDelete => 'can:role.delete',

            self::UserList => 'can:user.list',
            self::UserCreate => 'can:user.create',
            self::UserView => 'can:user.view',
            self::UserUpdate => 'can:user.update',
            self::UserDelete => 'can:user.delete',

            self::RateList => 'can:rate.list',
            self::RateCreate => 'can:rate.create',
            self::RateView => 'can:rate.view',
            self::RateUpdate => 'can:rate.update',
            self::RateDelete => 'can:rate.delete',
        };
    }
}
