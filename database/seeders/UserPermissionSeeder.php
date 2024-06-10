<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $admin = User::create([
            'name' => 'Bedjo',
            'email' => 'bedjo@suhendar',
            'password' => bcrypt('123456'),
        ]);

        $admin->assignRole('admin');
    }
}
