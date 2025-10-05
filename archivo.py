import random

elementos = "+-/*!&$#?=@abcdefghijklnoprstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ1234567890"

num = int(input("Ingrese la longitud deseada de la contraseña:"))

password = ""

for i in range(num):
   password += random.choice(elementos)

print (password)

