<%--

  header component.

  

--%><%
%><%@include file="/libs/foundation/global.jsp"%>
<%@page session="false" %><%
%><%
	// TODO add you code here
%>
<title>
	LOTR | <%=currentPage.getTitle()%>
</title>
<cq:includeClientLib categories="bootstrap"/>

<cq:includeClientLib categories="lotr-commons"/>
<div class="jumbotron img-rounded header" style=" background-color:#0099cc; color:whitesmoke;">
    <h2>
        Lord of the Rings	
    </h2>
    <i>
        <%=currentPage.getTitle()%>
    </i>
</div>
