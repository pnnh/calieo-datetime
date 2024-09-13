import stylex from "@stylexjs/stylex";
import React from "react";

enum Tab {
    GenTimestamp,
    TimestampToDatetime,
    DatetimeToTimestamp,
}

const styles = stylex.create({
    helperContainer: {
        width: '100%',
        marginBottom: '2rem',
    },
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '1rem',
    },
    tabItem: (active: boolean) => ({
        padding: '0.5rem',
        borderBottom: active ? '2px solid #333' : 'none',
        cursor: 'pointer',
    }),
    bodyContainer: {},
    helpTable: {
        width: '100%',
        padding: 0,
        display: 'table',
        borderTop: '0.5px solid #f0f0f0',
        borderLeft: '0.5px solid #f0f0f0',
        borderRight: '0.5px solid #f0f0f0',
    },
    tableRow: {
        padding: 0,
        textAlign: 'left',
        display: 'table-row',
    },
    tableLabel: {
        fontWeight: 'normal',
        fontSize: '0.9rem',
        display: 'table-cell',
        width: '10rem',
        backgroundColor: '#fafafa',
        borderBottom: '0.5px solid #f0f0f0',
        borderRight: '0.5px solid #f0f0f0',
        padding: '0.5rem',
    },
    tableCell: {
        padding: '0.5rem',
        display: 'table-cell',
        borderBottom: '0.5px solid #f0f0f0',
        fontSize: '0.9rem',
        color: '#333',
    }
})

export function TimestampHelper() {
    const [tab, setTab] = React.useState<Tab>(Tab.GenTimestamp)
    return <div {...stylex.props(
        styles.helperContainer,
    )}>
        <div {...stylex.props(
            styles.tabContainer,
        )}>
            <div {...stylex.props(
                styles.tabItem(tab === Tab.GenTimestamp),
            )} onClick={() => setTab(Tab.GenTimestamp)}>生成时间戳
            </div>
            <div {...stylex.props(
                styles.tabItem(tab === Tab.TimestampToDatetime),
            )} onClick={() => setTab(Tab.TimestampToDatetime)}>时间戳转时间
            </div>
            <div {...stylex.props(
                styles.tabItem(tab === Tab.DatetimeToTimestamp),
            )} onClick={() => setTab(Tab.DatetimeToTimestamp)}>时间转时间戳
            </div>
        </div>
        <div {...stylex.props(
            styles.bodyContainer,
        )}>
            {
                tab === Tab.GenTimestamp && <GenTimestamp/>
            }
            {
                tab === Tab.TimestampToDatetime && <TimestampToDatetime/>
            }
            {
                tab === Tab.DatetimeToTimestamp && <DatetimeToTimestamp/>
            }
        </div>
    </div>
}

function GenTimestamp() {
    return <div {...stylex.props(
        styles.helpTable,
    )}>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Java
            </div>
            <div {...stylex.props(
                styles.tableCell,
            )}>time
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>JavaScript
            </div>
            <div {...stylex.props(
                styles.tableCell,
            )}>
                <code>
                    Math.round(new Date().getTime()/1000)<br/>
                    <span>getTime()返回数值的单位是毫秒</span>
                </code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Microsoft .NET / C#
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>epoch = (DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) /
                10000000
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>MySQL
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>SELECT unix_timestamp(now())
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Perl
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>time
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>PHP
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>time()
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>PostgreSQL
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>SELECT extract(epoch FROM now())
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Python
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><span>先</span> import time <span>然后</span> time.time()
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Ruby
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>
                <span>获取Unix时间戳：</span>Time.now <span>或</span> Time.new<br/>
                <span>显示Unix时间戳：</span>Time.now.to_i
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Go
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><span>先</span> import time <span>然后</span> int32(time.Now().Unix())
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>SQL Server
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>SELECT DATEDIFF(s, '1970-01-01 00:00:00', GETUTCDATE())
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Unix / Linux
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>date +%s
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>VBScript / ASP
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>DateDiff("s", "01/01/1970 00:00:00", Now())
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>
                Perl
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><span>命令行状态：</span>perl -e "print time"
            </div>
        </div>
    </div>
}

function TimestampToDatetime() {
    return <div {...stylex.props(
        styles.helpTable,
    )}>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Java
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>String date = new java.text.SimpleDateFormat("dd/MM/yyyy
                HH:mm:ss").format(new java.util.Date(<u>Unix timestamp</u> * 1000))
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>JavaScript
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><span>先</span> var unixTimestamp = new Date(<u>Unix timestamp</u> *
                1000) <span>然后</span> commonTime = unixTimestamp.toLocaleString()
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Linux
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>date -d @<u>Unix timestamp</u></div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>MySQL
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>from_unixtime(<u>Unix timestamp</u>)
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Perl
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><span>先</span> my $time = <u>Unix timestamp</u> <span>然后</span> my
                ($sec, $min, $hour, $day, $month, $year) = (localtime($time))[0,1,2,3,4,5,6]
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>PHP
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>date('r', <u>Unix timestamp</u>)
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>PostgreSQL
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>SELECT TIMESTAMP WITH TIME ZONE 'epoch' + <u>Unix timestamp</u>) *
                INTERVAL '1 second';
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Python
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><span>先</span> import time <span>然后</span> time.gmtime(<u>Unix
                timestamp</u>)
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Ruby
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>Time.at(<u>Unix timestamp</u>)
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>SQL Server
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>DATEADD(s, <u>Unix timestamp</u>, '1970-01-01 00:00:00')
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>VBScript / ASP
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>DateAdd("s", <u>Unix timestamp</u>, "01/01/1970 00:00:00")
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>
                Perl
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}>
                <code>perl -e "print scalar(localtime(<u>Unix
                    timestamp</u>))"</code>
            </div>
        </div>
    </div>
}

function DatetimeToTimestamp() {
    return <div {...stylex.props(
        styles.helpTable,
    )}>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Java
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>long epoch = new java.text.SimpleDateFormat("<u>dd/MM/yyyy
                HH:mm:ss</u>").parse("01/01/1970 01:00:00");</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>JavaScript
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>var commonTime = new Date(Date.UTC(<u>year</u>, <u>month</u> - 1, <u>day</u>,
                <u>hour</u>, <u>minute</u>, <u>second</u>))</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>MySQL
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>
                SELECT unix_timestamp(<u>time</u>)<br/>
                <span>时间格式: YYYY-MM-DD HH:MM:SS 或 YYMMDD 或 YYYYMMDD</span></code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Perl
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code><span>先</span> use Time::Local <span>然后</span> my $time =
                timelocal($sec, $min, $hour, $day, $month, $year);</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>PHP
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>mktime(<u>hour</u>, <u>minute</u>, <u>second</u>, <u>month</u>,
                <u>day</u>, <u>year</u>)</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>PostgreSQL
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>SELECT extract(epoch FROM date('<u>YYYY-MM-DD HH:MM:SS</u>'));</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Python
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code><span>先</span> import time <span>然后</span>
                int(time.mktime(time.strptime('<u>YYYY-MM-DD HH:MM:SS</u>', '%Y-%m-%d %H:%M:%S')))</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Ruby
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>Time.local(<u>year</u>, <u>month</u>, <u>day</u>, <u>hour</u>, <u>minute</u>,
                <u>second</u>)</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>SQL Server
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>SELECT DATEDIFF(s, '1970-01-01 00:00:00', <u>time</u>)</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>Unix / Linux
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>date +%s -d"Jan 1, 1970 00:00:01"</code>
            </div>
        </div>
        <div {...stylex.props(
            styles.tableRow,
        )}>
            <div {...stylex.props(
                styles.tableLabel,
            )}>VBScript / ASP
            </div>
            <div  {...stylex.props(
                styles.tableCell,
            )}><code>DateDiff("s", "01/01/1970 00:00:00", <u>time</u>)</code>
            </div>
        </div>
    </div>
}
