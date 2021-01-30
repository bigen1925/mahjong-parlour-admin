import { Box, makeStyles } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import NamedPerson from '../atoms/NamedPerson';

interface PlayingTableProps {
    players: { lastName: string; firstName: string }[];
}

export default function PlayingTable(props: PlayingTableProps): JSX.Element {
    // playersをcopy
    const players = [...props.players];
    // 最大4人までに切り詰める
    players.length = 4;

    // styles
    const iconSize = 50;
    const styles = makeStyles({
        leftTop: {
            position: 'absolute',
            top: 0,
            left: 0,
        },
        rightTop: {
            position: 'absolute',
            top: 0,
            right: 0,
        },
        leftBottom: {
            position: 'absolute',
            bottom: 0,
            left: 0,
        },
        rightBottom: {
            position: 'absolute',
            bottom: 0,
            right: 0,
        },
    })();

    return (
        <Box style={{ position: 'relative', height: 150, width: 150 }}>
            {/* 左上のプレイヤー */}
            {players[0] ? (
                <NamedPerson name={players[0].lastName} iconSize={iconSize} className={styles.leftTop} />
            ) : (
                <AddCircleOutlineRoundedIcon className={styles.leftTop} style={{ fontSize: iconSize }} />
            )}

            {/* 右上のプレイヤー */}
            {players[1] ? (
                <NamedPerson name={players[1].lastName} iconSize={iconSize} className={styles.rightTop} />
            ) : (
                <AddCircleOutlineRoundedIcon className={styles.rightTop} style={{ fontSize: iconSize }} />
            )}

            {/* 右下のプレイヤー */}
            {players[2] ? (
                <NamedPerson name={players[2].lastName} iconSize={iconSize} className={styles.rightBottom} />
            ) : (
                <AddCircleOutlineRoundedIcon className={styles.rightBottom} style={{ fontSize: iconSize }} />
            )}

            {/* 左下のプレイヤー */}
            {players[3] ? (
                <NamedPerson name={players[3].lastName} iconSize={iconSize} className={styles.leftBottom} />
            ) : (
                <AddCircleOutlineRoundedIcon className={styles.leftBottom} style={{ fontSize: iconSize }} />
            )}

            {/* 中央のテーブル */}
            <CheckBoxOutlineBlankIcon
                display="block"
                style={{
                    transform: 'rotate(45deg)',
                    fontSize: 80,
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    top: 0,
                    bottom: 0,
                    margin: 'auto',
                }}
            />
        </Box>
    );
}
