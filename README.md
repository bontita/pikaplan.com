# PIKA PLAN Backend

A comprehensive meal planning application with AI-powered Kenyan cuisine prioritization, subscription-based access control, and secure payment processing.

## Features

- **User Authentication**: NextAuth.js with JWT sessions and multiple providers
- **AI Meal Planning**: OpenAI GPT-4 integration with Kenyan cuisine focus
- **Subscription Management**: Stripe-powered payment processing with tiered plans
- **Database**: PostgreSQL with Prisma ORM for type-safe data operations
- **Security**: Input validation, rate limiting, secure API key management
- **Plan Tiers**:
  - **Free**: 1 meal plan/month, basic features
  - **Daily**: KSh 14/day, 1 plan/day
  - **Weekly**: KSh 99/week, 7 plans/week
  - **Monthly**: KSh 199/month, 30 plans/month
  - **Annual**: KSh 2,200/year, 365 plans/year

## Setup

1. **Clone and Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env.local
   ```

   Fill in the required environment variables:
   - Database URL
   - NextAuth configuration
   - OpenAI API key
   - Stripe keys and webhook secret
   - Email configuration (optional)

3. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Stripe Configuration**
   - Create products and prices in Stripe Dashboard
   - Update price IDs in `app/api/stripe/checkout/route.ts`
   - Set up webhook endpoint at `/api/stripe/webhook`

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth handlers

### Meal Planning
- `POST /api/meal-plan` - Generate AI meal plan (authenticated)
- Plan limits enforced based on subscription tier

### Payments & Subscriptions
- `POST /api/stripe/checkout` - Create Stripe checkout session
- `POST /api/stripe/webhook` - Handle Stripe webhooks
- `POST /api/subscription/manage` - Cancel/reactivate subscriptions

### User Data
- `GET /api/dashboard` - User dashboard with subscription and usage info
- `GET /api/pricing` - Available plans and pricing information

## Security Features

- Input validation with Zod schemas
- Rate limiting on API endpoints
- Secure password hashing with bcryptjs
- JWT-based authentication
- Environment variable protection for secrets
- CORS configuration
- SQL injection prevention via Prisma

## Kenyan Cuisine Focus

The AI meal planner prioritizes authentic Kenyan meals including:
- Ugali with Sukuma Wiki and Nyama Choma
- Pilau with Kachumbari
- Chapati with Beef Stew
- Matoke with Groundnut Sauce
- Githeri (Maize and Beans)
- And many more traditional dishes

## Deployment

1. Set up production database (PostgreSQL)
2. Configure production environment variables
3. Set up Stripe webhook endpoint
4. Deploy to Vercel/Netlify or your preferred platform
5. Run database migrations in production

## Development

- Use `npm run build` to build for production
- Use `npm run lint` to check code quality
- Database schema changes: `npx prisma migrate dev`
- Generate Prisma client: `npx prisma generate`

## Contributing

1. Follow TypeScript best practices
2. Add proper error handling
3. Include input validation for all API endpoints
4. Test authentication and authorization
5. Ensure Kenyan cuisine prioritization in AI prompts