<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlan = [[
            'name'=>'basic',
            'price'=> 200000,
            'active_period_in_months' => 3,
            'features'=> json_encode(['feature1','feature2']),
        ],
        [
            'name'=>'prime',
            'price'=> 600000,
            'active_period_in_months' => 6,
            'features'=> json_encode(['feature1','feature2','feature3','feature4']),
        ],  
    ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
