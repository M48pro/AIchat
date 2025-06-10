# Garda Racing Chat Widget - Integration Guide

Этот виджет чата можно легко встроить в любой сайт. Следуйте инструкциям ниже для интеграции.

## Быстрая интеграция

### 1. Сборка виджета

```bash
npm run build
```

Это создаст файлы в папке `dist/`:
- `garda-chat-widget.umd.js` - основной JavaScript файл
- `garda-chat-widget.es.js` - ES модуль версия
- `style.css` - стили виджета

### 2. Включение в HTML

```html
<!DOCTYPE html>
<html>
<head>
    <!-- Подключите React (если еще не подключен) -->
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    
    <!-- Стили виджета -->
    <link rel="stylesheet" href="path/to/dist/style.css">
</head>
<body>
    <!-- Ваш контент -->
    
    <!-- Конфигурация виджета -->
    <script>
        window.gardaChatWidgetConfig = {
            position: 'bottom-right', // 'bottom-left' или 'bottom-right'
            theme: 'light', // 'light' или 'dark'
            primaryColor: '#0066cc',
            supabaseUrl: 'YOUR_SUPABASE_URL',
            supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
        };
    </script>
    
    <!-- Виджет -->
    <script src="path/to/dist/garda-chat-widget.umd.js"></script>
</body>
</html>
```

### 3. Ручная инициализация (опционально)

```javascript
// Инициализация после загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    window.GardaRacingChatWidget.init({
        position: 'bottom-right',
        theme: 'light',
        primaryColor: '#0066cc',
        supabaseUrl: 'YOUR_SUPABASE_URL',
        supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
    });
});
```

## Конфигурация

### Параметры

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `containerId` | string | 'garda-chat-widget' | ID контейнера для виджета |
| `position` | string | 'bottom-right' | Позиция виджета ('bottom-right' или 'bottom-left') |
| `theme` | string | 'light' | Тема виджета ('light' или 'dark') |
| `primaryColor` | string | '#0066cc' | Основной цвет виджета |
| `supabaseUrl` | string | - | URL вашего Supabase проекта |
| `supabaseAnonKey` | string | - | Анонимный ключ Supabase |

### Методы API

```javascript
// Инициализация виджета
window.GardaRacingChatWidget.init(config);

// Обновление конфигурации
window.GardaRacingChatWidget.updateConfig({
    theme: 'dark',
    primaryColor: '#ff6b6b'
});

// Удаление виджета
window.GardaRacingChatWidget.destroy();
```

## Примеры использования

### WordPress

```php
// В functions.php вашей темы
function add_garda_chat_widget() {
    ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/garda-chat/style.css">
    <script>
        window.gardaChatWidgetConfig = {
            position: 'bottom-right',
            theme: 'light',
            primaryColor: '#0066cc',
            supabaseUrl: '<?php echo get_option('garda_supabase_url'); ?>',
            supabaseAnonKey: '<?php echo get_option('garda_supabase_key'); ?>'
        };
    </script>
    <script src="<?php echo get_template_directory_uri(); ?>/assets/garda-chat/garda-chat-widget.umd.js"></script>
    <?php
}
add_action('wp_footer', 'add_garda_chat_widget');
```

### Shopify

```liquid
<!-- В theme.liquid перед закрывающим </body> -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

{{ 'garda-chat-widget.css' | asset_url | stylesheet_tag }}

<script>
    window.gardaChatWidgetConfig = {
        position: 'bottom-right',
        theme: 'light',
        primaryColor: '{{ settings.accent_color }}',
        supabaseUrl: '{{ settings.garda_supabase_url }}',
        supabaseAnonKey: '{{ settings.garda_supabase_key }}'
    };
</script>

{{ 'garda-chat-widget.umd.js' | asset_url | script_tag }}
```

### Простой HTML сайт

```html
<!DOCTYPE html>
<html>
<head>
    <title>Мой сайт</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <link rel="stylesheet" href="./garda-chat/style.css">
</head>
<body>
    <h1>Добро пожаловать на мой сайт</h1>
    <p>Контент сайта...</p>
    
    <script>
        window.gardaChatWidgetConfig = {
            position: 'bottom-right',
            theme: 'light',
            primaryColor: '#0066cc'
        };
    </script>
    <script src="./garda-chat/garda-chat-widget.umd.js"></script>
</body>
</html>
```

## Требования

- React 18+ (подключается автоматически если не найден)
- Современный браузер с поддержкой ES6+
- Supabase проект для работы с базой данных

## Размер файлов

- `garda-chat-widget.umd.js`: ~150KB (gzipped ~45KB)
- `style.css`: ~8KB (gzipped ~2KB)

## Поддержка браузеров

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Устранение проблем

### Виджет не появляется
1. Проверьте, что React подключен
2. Убедитесь, что пути к файлам корректны
3. Проверьте консоль браузера на ошибки

### Стили конфликтуют
Виджет использует изолированные стили с префиксом `#garda-chat-widget`, но если возникают конфликты:

```css
/* Добавьте более высокую специфичность */
#garda-chat-widget .your-conflicting-class {
    /* ваши стили */
}
```

### База данных не работает
Убедитесь, что:
1. Supabase URL и ключ корректны
2. RLS политики настроены правильно
3. Таблицы созданы согласно схеме