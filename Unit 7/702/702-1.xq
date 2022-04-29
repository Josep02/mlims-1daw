for $x in doc ("bookstore.xml")/bookstore/book
order by $x/title
return $x/title