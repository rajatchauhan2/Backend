import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dic4pgsbm', 
        api_key: '659894635227931', 
        api_secret: '5SEJ5oqOU_kFnR8fcfihSHubb-I' // Click 'View API Keys' above to copy your API secret
    });
});