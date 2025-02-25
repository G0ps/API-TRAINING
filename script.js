let random_image_button = document.getElementById("get-random-image-button");
let random_image = document.getElementById("rand");

random_image_button.addEventListener("click", () => func());
async function func() {    
    const categories = ['nature', 'city', 'food']; 
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
const apiUrl = `https://api.api-ninjas.com/v1/randomimage?category=${randomCategory}`;
const headers = {
                'X-Api-Key': '/vSUeZXzVRCXai/CxQupSA==AEnI513VRqvCdC5o',
                'Accept': 'image/jpg'
            };

            try {
                const response = await fetch(apiUrl, { headers });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                
                const blob = await response.blob();
                
                
                const imageUrl = URL.createObjectURL(blob);
               
                random_image.src = imageUrl;
            } catch (error) {
                console.error("Error:", error);
            }
        }