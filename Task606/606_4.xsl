<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <countries>
            <xsl:apply-templates />
        </countries>
    </xsl:template>

    <xsl:template match="museum">
        <country>
            <xsl:attribute name="name">
                <xsl:value-of select="@country" />
            </xsl:attribute>
            <city>
                <xsl:attribute name="name">
                    <xsl:value-of select="@city" />
                </xsl:attribute>
                <museum>
                    <xsl:attribute name="name">
                        <xsl:value-of select="@name" />
                    </xsl:attribute>
                </museum>
            </city>
        </country>
    </xsl:template>
</xsl:stylesheet>