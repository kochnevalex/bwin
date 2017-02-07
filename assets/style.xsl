<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt"
                exclude-result-prefixes="msxsl">


    <xsl:template match="gameslist">
        <html>
            <!--<xsl:attribute name="class">table-xml</xsl:attribute>-->
            <head>

            </head>
            <body>
                <xsl:attribute name="style">background: #000; color: #fff;</xsl:attribute>
                <div>
                    <xsl:apply-templates select="event"/>
                </div>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="event">
        <div>

            <xsl:attribute name="style">font-size: 18px; font-weight: bold; text-align: center;</xsl:attribute>
            <div>
                <p>
                    <xsl:value-of select="@name"/>

                </p>
            </div>

            <div>
                <xsl:attribute name="style">font-size: 12px</xsl:attribute>
                <time>
                    <xsl:value-of select="@eventdate"/>
                </time>

            </div>
        </div>
        <div>
            <xsl:apply-templates select="games"/>
        </div>

    </xsl:template>


    <xsl:template match="games">
        <p>
            <xsl:attribute name="style">color: #ffe680; padding: 0 10px;</xsl:attribute>
            <xsl:value-of select="@name"/>
        </p>
        <xsl:apply-templates select="results"/>
    </xsl:template>

    <xsl:template match="results">
        <p>
            <xsl:attribute name="style">margin: 5px;
                background-color: #333;
                cursor: pointer; padding:
                10px 5px;border-top: 1px solid;
                border-top-color: #505050;
                vertical-align: top;
                font-size: 13px;
                position: relative;
                </xsl:attribute>
            <xsl:value-of select="@name"/>
            <span>
                <xsl:attribute name="style">margin: 5px;
                    float: right;
                    line-height: 13px;
                </xsl:attribute>
                <xsl:value-of select="@odd"/>
            </span>
        </p>
    </xsl:template>


</xsl:stylesheet>