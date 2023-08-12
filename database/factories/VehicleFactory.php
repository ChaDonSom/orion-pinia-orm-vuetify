<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company(),
            'color' => $this->faker->colorName(),
            'year' => $this->faker->year(),
            'make' => $this->faker->company(),
            'model' => $this->faker->company(),
            'body_type' => $this->faker->randomElement(['Sedan', 'SUV', 'Truck', 'Van', 'Coupe', 'Wagon']),
            'fuel_type' => $this->faker->randomElement(['Gasoline', 'Diesel', 'Electric', 'Hybrid']),
        ];
    }
}
