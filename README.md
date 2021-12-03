# Домашнее задание

Разработать флоу создания платежа

# Требования
Дизайн лежит [тут](https://www.figma.com/file/NN9GlXCoDOAR5AFKrUAmkl/Skillbox?node-id=306%3A66674)

- для разделов `Главная`, `Банкоматы` и `Профиль` сделать экраны - заглушки (Название раздела по-центру экрана)
- для реализации списка на экране `Платежи` использовать компонент `FlatList`
- для реализации списка на экране `Мобильная связь` использовать компонент `FlatList`
- поиск должен не учитвать регистр
- заголовок на экране создания платежа должен соотвествовать названию сервиса
- выбор карты (модальное окно) реализовывать не надо
- клавиатура не должна мешать вводу сумы платежа на маленьких дисплеях
- "чипсы" с предзаготовленными суммами должны скролиться горизонтально, а по нажатию на сумму, она должна устанавливаться в поле ввода
- по нажатию на кнопку продолжить произвести минимальную валидацию указанных данных (смотри требования к данным), если валидация успешна, то показать `Alert` с текстом `Успех`, иначе с текстом `Проверьте введенные данные`
- при получении фокуса полем ввода, необходимо подставить +7, если поле было пустым, иначе отображать плейсхолдер `Номер телефона`

## Требования к данным

- +7 в начале номера должно быть зашито, код страны нельзя сменить
- номер телефона должен состоять из 10 цифр
- минимальная сумма для осуществления платежа - 1 рубль
- максимальная сумма для осуществления платежа - 20000 рублей

получить список категорий, серисов и иконок можно с помощью запроса

`GET https://github.com/kode-frontend/files/raw/main/categories.json`
