export function sanitizeUsername(username: string): string {
    // Определяем шаблон для допустимых символов
    const validPattern = /^[a-zA-Z0-9_-]+$/;

    // Создаем массив для допустимых символов
    const sanitized: string[] = [];

    // Оставляем только допустимые символы
    for (const char of username) {
        if (validPattern.test(char)) {
            sanitized.push(char);
        } else {
            // Заменяем недопустимые символы на подчеркивание
            sanitized.push('_');
        }
    }

    // Получаем очищенное имя пользователя
    let result = sanitized.join('');

    // Обеспечиваем минимальную длину в 6 символов
    if (result.length < 6) {
        result = result + '_'.repeat(6 - result.length);
    }

    return result;
}
