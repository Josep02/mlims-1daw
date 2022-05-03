<html>
<body>
<h1>Book List</h1>
<table border="1">
<tr>
  <th>Title</th>
  <th>Author</th>
  <th>Price</th>
</tr>
{
for $x in doc("bookstore.xml")/bookstore/book
return <tr>
          <td align="left">{data($x/title)}</td>
          <td align="left">{data($x/author)}</td>
          <td align="right">{data($x/@price)}</td>
       </tr>
}
</table>
</body>
</html>