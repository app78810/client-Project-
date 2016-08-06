<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


<xsl:template match="/"> <!---searches for complete xml file-->

	<html>
		<head>
			  <title>Star of India menu</title>
			      
	  
	  
	 

	 </head>
	 <body style= "background-color:yellow; rgba: 50%">
		 
				<div id="menu-bar">
				<div id="menu-content" class="clearfix">

				<ul  class="nav">
				<li class="menu"><a href="homePage.html">Home</a></li>	
				<li class="menu"><a href="menu.xml">Menu</a></li>
				<li class="menu"><a href="Aboutus.html">About US</a></li>
				<li class="menu"><a href="ContactPage.html">Contact US</a></li>
				<li class="menu"><a href="order.html">Order</a></li>

				</ul> <!-- end ul#nav -->
				</div> <!-- end #menu-content-->
				</div>
				
				<h1>Do you want to order???</h1>
				
				<!-- Break -->
				
	  <table border="0">
                <tr>
                        <td colspan="3">
                        <p align="center"><b><font face="Arial">star of India Specials for </font></b></p>
						</td>
						
				</tr>
					<tr>   
                        <td><font face="Arial"><b><a name="Vegetarian Menu for Two">
                        Vegetarian Menu </a></b>
                        Save $5.00 off Regular Menu Price! </font></td><br/><br/></tr>
						<tr><td>Includes: </td></tr>
                
			
			            
                        <xsl:for-each select="menu/vegdish">
						<tr>
						<td>
                        <ul>
								<li><font face="Arial">Vegetable Pakora: <xsl:value-of select="pakora"/></font></li>
                              <li><font face="Arial">Nan: <xsl:value-of select="nan"/></font></li>
								<li><font face="Arial">Sag Paneer: <xsl:value-of select="paneer"/></font></li>
                                <li><font face="Arial">Navratan Korma: <xsl:value-of select="korma"/></font></li>
                                <li><font face="Arial">Raita: <xsl:value-of select="raita"/></font></li>
                                <li><font face="Arial">Rice: <xsl:value-of select="rice"/></font></li>
                        </ul>
						</td>
						</tr>
						
						</xsl:for-each>
					
						
                        <tr><b><i><font face="Arial"></font></i></b>
                        <td width="15">
                        <font face="Arial"><b><a name="Non-Vegetarian Menu for Two">
                        Non-Vegetarian Menu </a></b>
                        Save $5.00 off Regular Menu Price! </font></td></tr>
						<tr><td><font face="Arial">Includes:</font></td></tr>
                        <xsl:for-each select="menu/nonveg">
						<tr>
						<td>
                        <ul>
                              <li><font face="Arial">Chicken Samosa:<xsl:value-of select="samosa"/> </font></li>
                            <li><font face="Arial">Garlic Nan:<xsl:value-of select="garlicnan"/> </font></li>
                             <li><font face="Arial">Chicken Tikka Masala:<xsl:value-of select="tikka"/> </font></li>
                            <li><font face="Arial">Tandoori Chicken:<xsl:value-of select="chicken"/> </font></li>
                            <li><font face="Arial">Raita:<xsl:value-of select="raita1"/></font></li>
                             <li><font face="Arial">Rice:<xsl:value-of select="rice1"/></font></li>
                        </ul>
						</td>
						</tr>
						</xsl:for-each>
			</table>
				<br/>
				<input type="submit" id="order" value="Order Food" onclick = "location.href='order.html'"/>
			</body>	
		</html>
</xsl:template> <!-- end of xsl template-->
</xsl:stylesheet> <!-- end of xsl:stylesheet-->