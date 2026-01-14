---
title: "SQL Query for Counting Records per Day"
datePublished: 2016-08-06T22:01:02+00:00
cover: /images/HYktuKx6S.jpeg
tags: ["programming", "databases", "sql"]

---




This post is part of a project to move my old reference material to my blog. Before 2012, when I accessed the same pieces of code or general information multiple times, I would write a quick HTML page for my own reference and put it on a personal site. Later, I published these pages online. Some of the pages still get used and now I want to make them available on my blog.

![Photo by Daniel Chen](/images/1_HC3yOX5DyVdZkT3y1AuIUw.webp)*Photo by [Daniel Chen](https://unsplash.com/@d_che)*

This SQL query will add up the record count per day based on a column called “Timestamp.”

### Transact SQL

```
SELECT    DATEPART(YEAR, Timestamp) AS 'Year',
          DATEPART(MONTH, Timestamp) AS 'Month',
          DATEPART(DAY, Timestamp) AS 'Day',
          COUNT(*) AS 'Visits'
FROM      tblVisits
GROUP BY  DATEPART(DAY, Timestamp),
          DATEPART(MONTH, Timestamp),
          DATEPART(YEAR, Timestamp)
ORDER BY  'Year',
          'Month',
          'Day'
```


### Results

The results of this query will appear as follows:

```
| Year | Month | Day | Visits |
|------|-------|-----|--------|
| 2011 | 2     | 7   | 46     |
| 2011 | 2     | 8   | 40     |
| 2011 | 2     | 9   | 37     |
| 2011 | 2     | 10  | 36     |
| 2011 | 2     | 11  | 41     |
```
