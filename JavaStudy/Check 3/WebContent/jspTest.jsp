<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>jspTest</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<jsp:include page="/WEB-INF/header.jsp"></jsp:include>
	<form action="">
		<table>
			<tr>
				<th><b>name</b></th>
				<td><input type="text" name="name"></td>
			</tr>
			<tr>
				<th><b>id</b></th>
				<td><input type="text" name="id"></td>
			</tr>
		</table>
	</form>
	<jsp:include page="/WEB-INF/footer.jsp"></jsp:include>
</body>
</html>