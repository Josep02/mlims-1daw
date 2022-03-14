<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <countries>
            <xsl:apply-templates />
        </countries>
    </xsl:template>
    <xsl:template match="museum">
        <country>
            <xsl:attribute name="name">
                <xsl:value-of select="country" />
            </xsl:attribute>
            <museum>
                <xsl:attribute name="museum">
                    <xsl:value-of select="name" />
                </xsl:attribute>
                <xsl:attribute name="city">
                    <xsl:value-of select="city" />
                </xsl:attribute>
            </museum>
        </country>
    </xsl:template>
</xsl:stylesheet>