<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <museums>
            <xsl:apply-templates />
        </museums>
    </xsl:template>

    <xsl:template match="museum">
        <museum>
            <name>
                <xsl:value-of select="@name" />
            </name>
            <city>
                <xsl:value-of select="@city" />
            </city>
            <country>
                <xsl:value-of select="@country" />
            </country>
        </museum>
    </xsl:template>
</xsl:stylesheet>