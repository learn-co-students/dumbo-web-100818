What is SQL stand for?
- Structured Query Language

What is SQL for?
- communicate with databases
- Structured way to access and store data

What kinds of operations are there in SQL?
- Pull information from a database (get info from a database)
- SELECT * user

- Insert into
- create tables

- delete columns tables rows

- UPDATE

#  CRUD
--------
Create
- INSERT
Read
- SELECT
Update
- UPDATE
Delete / Destroy
- DELETE



- pull binary data


# doing math, work on data in SQL
- GROUP
- SUM up an avg.
- Max Min
- join
- where










# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
SELECT * FROM artists WHERE name = "Black Sabbath";
SELECT * FROM artists WHERE name LIKE "Black Sabbath";
```

3. Write the SQL to create a table named 'fans' with an auto incrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (
  id INTEGER PRIMARY KEY,
  name TEXT
);
```

1 black sabbath
2 black sabbath

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql
ALTER TABLE fans ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**


 first find black eyed peas
 SELECT artist_id FROM fans WHERE name LIKE "Black Eyed Peas";
 SELECT artist_id FROM fans WHERE name LIKE "black eyed peas";

 then add me to fans table

 KevyWevy

```sql
INSERT INTO fans (name, artist_id, age) VALUES ("KevyWevy", 169, 31)
```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE artist_id NOT LIKE 169;
SELECT * FROM fans WHERE artist_id != 169;
```

8. Write the SQL to display all artists name next to their album title

```sql
SELECT artists.Name, albums.Title  FROM albums JOIN artists ON artists.ArtistId  = albums.ArtistId;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

SELECT
  artists.Name as "artist name",
  albums.Title as "album title",
  COUNT( tracks.Name) as "track count"
FROM albums
JOIN artists ON artists.ArtistId = albums.ArtistId
JOIN tracks ON tracks.AlbumId = albums.AlbumId
GROUP BY albums.Title;

```


DESTORY KevyWevy....

DELETE * FROM fans WHERE name = "KevyWevy";








10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
