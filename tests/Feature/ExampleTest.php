<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
     public function test_the_home_page_returns_a_successful_response(): void
    {
        $response = $this->get('/blogs');

        $response->assertStatus(200);
    }
    public function test_the_contact_page_returns_a_successful_response(): void
   {
       $response = $this->get('/contact');

       $response->assertStatus(200);
   }
   public function test_the_api_returns_a_successful_response(): void
   {

    $response = $this->get('/api/blog/');

    $response->assertStatus(200);
    
    $response->assertHeader('Content-Type', 'application/json');
    $jsonContent = $response->json();
    $this->assertIsArray($jsonContent);
    $this->assertNotEmpty($jsonContent);
    foreach ($jsonContent as $item) {
        $this->assertArrayHasKey('id', $item);
        $this->assertArrayHasKey('title', $item);
        $this->assertArrayHasKey('description', $item);
    }
}
}
