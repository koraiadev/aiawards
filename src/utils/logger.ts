type LogType = 'info' | 'warn' | 'error' | 'ok';

const styles: Record<LogType, string> = {
    info: 'color: white; background: skyblue; font-weight: 600; padding: 2px 4px; border-radius: 2px;',
    warn: 'color: black; background: #F6EF87; font-weight: 600; padding: 2px 4px; border-radius: 2px;',
    error: 'color: white; background: red; font-weight: 600; padding: 2px 4px; border-radius: 2px;',
    ok: 'color: white; background: mediumseagreen; font-weight: 600; padding: 2px 4px; border-radius: 2px;',
};

export const logger = (type: LogType, ...messages: any[]) => {
    console.log(`%c${' '}`, styles[type], ...messages);
};
