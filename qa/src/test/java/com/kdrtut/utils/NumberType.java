package com.kdrtut.utils;

public enum NumberType {
    /**
     * Convert all non-integer numbers to floats and doubles (depending on the size of the number)
     */
    FLOAT_AND_DOUBLE,
    /**
     * Convert all non-integer numbers to BigDecimal
     */
    BIG_DECIMAL,
    /**
     * Convert all non-integer numbers to doubles
     */
    DOUBLE
}
