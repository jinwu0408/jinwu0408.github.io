import cv2
img = cv2.imread("img/favicon.png",1)
image = cv2.resize(img,(48,48))
cv2.imwrite("img/favicon.png",image)
