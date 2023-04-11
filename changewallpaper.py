import ctypes
import os



SPI_SETDESKWALLPAPER = 20

current_dir_path = os.path.dirname(os.path.abspath(__file__))

# Set the path to your image file
image_path = current_dir_path + "/screenshot.png"

# Set the wallpaper
ctypes.windll.user32.SystemParametersInfoW(SPI_SETDESKWALLPAPER, 0, image_path, 0)
