# Real Estate Management System - FastAPI

This is a web application for managing real estate properties, built using FastAPI and Prisma. It provides APIs to add, fetch, update, and delete properties authentication.


## Features

- Add new properties
- Fetch all properties by locality
- Update property details
- Delete property records


<!--## Getting Started-->

## Technologies Used

- nodejs
- Prisma ORM

### Prerequisites

- nodejs
- PostgreSQL

## Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Ansh-Rajput/realstate_backend_nodejs

2. Install Python dependencies
   ```bash
   npm i

3. Create .env file
   ```bash 
   DATABASE_URL=
   
4. Generate Prisma client
   ```bash 
   prisma generate
  
5. Run the backend:
   ```bash
   npx nodemon app.js

## Routes present in this backend


1. BASE_URL/api/add_new_property:
   ```sh
   {
       "property_name":property_name,
       "locality":locality,
       "owner_name":owner_name
       
   }
2. BASE_URL/api/fetch_all_properties:
   ```sh
   {
       "locality_name":locality
   }
3. BASE_URL/api/update_property_details:
   ```sh
   {
       "property_id":property_id,
       "locality_id":locality_id,
       "owner_name":owner_name
   }
4. BASE_URL/api/delete_property_record:
   ```sh
   {
       "property_id":property_id
   }

   
