import ctypes

SPI_SETDESKWALLPAPER = 20

# Set the path to your image file
image_path = "C:/Users/Mert/Desktop/iftar/screenshot.png"

# Set the wallpaper
ctypes.windll.user32.SystemParametersInfoW(SPI_SETDESKWALLPAPER, 0, image_path, 0)
