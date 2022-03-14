<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <body>
                <h1>
                    <xsl:value-of select="secondary-school/name" />
                </h1>
                <xsl:apply-templates />
            </body>
        </html>
    </xsl:template>
    <xsl:template match="secondary-school/name"></xsl:template>
    <xsl:template match="web">
        <p>
            <a href="https://www.iesabastos.org/">Web page: </a>
            <xsl:apply-templates />
        </p>
    </xsl:template>
    <xsl:template match="cycles">
        <xsl:apply-templates />
    </xsl:template>
    <xsl:template match="cycle/name">
        <p>
            <xsl:value-of select="." />
        </p>
    </xsl:template>
    <xsl:template match="cycle/grade"></xsl:template>
</xsl:stylesheet>