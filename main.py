from PIL import Image, ImageEnhance

# Define a function to lighten the image
def lighten_image(image_path, output_path, brightness_factor=2):
    image = Image.open(image_path).convert("RGBA")
    enhancer = ImageEnhance.Brightness(image)
    image_light = enhancer.enhance(brightness_factor)
    image_light.save(output_path)

# Paths for the input and output images
image_paths = [
    ("images/favicon.png", "images/favicon.png"),
    ("images/favicon-32x32_light.png", "images/favicon-32x32.png"),
    ("images/favicon-16x16_light.png", "images/favicon-16x16.png"),
    ("images/apple-touch-icon_light.png", "images/apple-touch-icon.png"),
    ("images/android-chrome-512x512_light.png", "images/android-chrome-512x512.png"),
    ("images/android-chrome-192x192_light.png", "images/android-chrome-192x192.png")
]

# Process each image
for input_path, output_path in image_paths:
    lighten_image(input_path, output_path)
