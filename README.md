# Prolog Restaurant
#### Restaurant Web Application developed in Ionic 3 and Python 3.6 with Prolog database

This application allows you to see the listed products on a restaurant, add them to the cart and checkout, also being able to see the sales previously made.

It's developed in Ionic 3, using Python 3.6 as the back server and SWI Prolog as database, connection done by using the Python Library called **pyswip**, available at: https://github.com/yuce/pyswip.

## REQUIREMENTS

* NPM
* Python 3.x and higher
* Ionic 3.x and higher
* SWI-Prolog 7.2.x and higher (setup guide: https://github.com/yuce/pyswip/blob/master/INSTALL.md)

## INSTALLATION

```
git clone https://github.com/felzend/prolog-restaurant
cd prolog-restaurant
npm install
```

#### RUNNING IONIC APPLICATION

```
ionic serve
```

#### RUNNING THE WEBSERVER

```
cd server
py api.py
```



## SCREENSHOTS

![Application's Home Page](https://raw.githubusercontent.com/felzend/prolog-restaurant/master/screenshots/1.PNG)

![Cart](https://raw.githubusercontent.com/felzend/prolog-restaurant/master/screenshots/3.PNG)

![Previously made sales](https://raw.githubusercontent.com/felzend/prolog-restaurant/master/screenshots/4.PNG)
