# NodeJS_Homework_Chas7

1. Дополнет е Update методот во домашното.

2. Апликацијата ја тестирав на Postman кадешто не се пројави грешка во кодот.
   - Со GET методот ги земав сите рецепти од data.json,
   - Со POST методот креирав нов рецепт кој го зачував во data.json:
     
{"title":"Kreiranje Nov Recept","ingredients":["Nova sostojka1","Nova sostojka2"]}

  - Со PUT методот го ажурирав рецептот со index 0 кој пред ажурирањето изгледаше вака:

{"title": "Spaghetti Carbonara", "ingredients": ["spaghetti", "eggs", "pancetta", "parmesan cheese", "black pepper"]},

  - а по ажурирањто:

{"title":"Updated Spaghetti Carbonara","ingredients":["updatedSostjka1","updatedSostojka2"],"cooking-time":"25 minutes"},

  - Со DELETE методот го избришав рецептот со index 1 кој гласеше:

{"title": "Penne Arrabbiata", "ingredients": ["penne pasta", "garlic", "tomato sauce", "red chili flakes", "olive oil", "parsley"]}
