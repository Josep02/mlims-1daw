<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <museums>
            <xsl:apply-templates />
        </museums>
    </xsl:template>

    <xsl:template match="museum">
        <museum>
            <xsl:attribute name="location">
                <xsl:value-of select="@city" />
                (
                <xsl:value-of select="@country" />
                )
            </xsl:attribute>
            <xsl:value-of select="@name" />
        </museum>
    </xsl:template>
</xsl:stylesheet>