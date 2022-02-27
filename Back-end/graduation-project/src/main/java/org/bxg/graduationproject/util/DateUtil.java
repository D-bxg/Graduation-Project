

package org.bxg.graduationproject.util;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAccessor;
import java.util.Date;

public class DateUtil {
    public static String formatDateInISOString(Date date) {
        return date.toInstant().atOffset(ZoneOffset.UTC).format(DateTimeFormatter.ISO_INSTANT);
    }
    public static Date convertISOStringToDate(String isoDateString) {
        TemporalAccessor ta = DateTimeFormatter.ISO_INSTANT.parse(isoDateString);
        Instant i = Instant.from(ta);
        Date d = Date.from(i);
        return d;
    }
}